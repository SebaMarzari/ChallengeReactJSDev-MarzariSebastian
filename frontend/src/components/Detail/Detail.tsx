import { useEffect, useContext, useState } from "react"
// Context
import { GlobalContext } from "context/GlobalContext"
// Slice
import { getClient, selectClientInfo, selectClientInfoLoading } from "../../redux/features/clientsSlice/clientsSlice"
// Hooks
import { useAppDispatch } from "hooks/useAppDispatch"
// Utils
import { DATE_FORMAT } from "utils/constants"
// Selectors
import { useSelector } from "react-redux"
// Types
import { TablePagination, TableType } from "./types/TableType"
import { Results } from "types/Client"
// Components
import { Table } from "antd"
// Styles
import "./style.css"

const columns = [
  {
    title: "Gestionado",
    dataIndex: "last_updated",
    key: "last_updated",
  },
  {
    title: "ID caso",
    dataIndex: "case_id",
    key: "case_id",
  },
  {
    title: "Telefono",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Dni",
    dataIndex: "dni",
    key: "dni",
  },
  {
    title: "Grupo",
    dataIndex: "group",
    key: "group",
  },
  {
    title: "Orden",
    dataIndex: "order",
    key: "order",
  },
  {
    title: "Llamada",
    dataIndex: "case_duration",
    key: "case_duration",
  },
  {
    title: "Estado",
    dataIndex: "status",
    key: "status",
  }
]

const Detail = () => {
  const dispatch = useAppDispatch();
  const [clientInfoList, setClientInfoList] = useState<TableType[]>([])
  const [isNext, setIsNext] = useState(false)
  const { startDate, endDate, clientSelected, user } = useContext(GlobalContext)
  const clientInfo = useSelector(selectClientInfo)
  const loading = useSelector(selectClientInfoLoading)
  const isLoading = loading === 'loading'

  const handleFetchClient = async (url?: string, isNext?: boolean) => {
    const data = {
      startDate: startDate.format(DATE_FORMAT),
      endDate: endDate.format(DATE_FORMAT),
      id: clientSelected.id,
      token: user.token,
      url,
    }
    await dispatch(getClient(data))
  }

  const handleChange = (pagination: TablePagination) => {
    const { current, pageSize } = pagination
    const nextCount = current * pageSize
    if (nextCount >= clientInfoList?.length && clientInfo?.next) {
      const url = `${clientInfo?.next}`
      setIsNext(true)
      handleFetchClient(url, true)
    }
  }

  useEffect(() => {
    if (startDate && endDate && clientSelected) {
      handleFetchClient()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, clientSelected])

  useEffect(() => {
    if (clientInfo && !isLoading) {
      const newData = clientInfo.results.map((item: Results) => ({
        last_updated: item.last_updated,
        case_id: item.case_uuid,
        phone: item.phone,
        dni: item.extra_metadata.dni,
        group: item.extra_metadata.grupo,
        order: item.extra_metadata.orden,
        case_duration: item.case_duration,
        status: item.status,
      }));
      if (isNext) {
        setClientInfoList([...clientInfoList, ...newData])
        setIsNext(false)
      } else {
        setClientInfoList(newData)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientInfo, isLoading])

  return (
    <Table
      columns={columns}
      dataSource={clientInfoList}
      pagination={{
        total: clientInfo?.count,
        pageSize: 10,
      }}
      onChange={handleChange}
      loading={isLoading}
      // scroll={{ y: 'calc(100vh - 4rem)' }}
      style={{
        minHeight: 'calc(100vh - 4rem)',
      }}
    />
  )
}

export default Detail;