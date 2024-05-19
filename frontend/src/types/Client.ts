import { User } from "./User";

export interface Client {
  id: number;
  name: string;
  users: User[];
}

interface CaseResult {
  result_id: number;
  name: string;
  is_final: boolean;
  contacted: boolean;
}

interface CaseLogResponse {
  text: string;
  time: number;
  confidence: number;
}

interface CaseLog {
  responses: CaseLogResponse[];
  result_id: number;
  commitment: string;
  got_promise: boolean;
  transcription: CaseLogResponse[];
  final_sip_code: number;
}

interface ExtraMetadata {
  dni: string;
  grupo: string;
  orden: string;
}

export interface Results {
  id: number;
  client: {
    id: number;
    name: string;
  };
  case_uuid: number;
  phone: string;
  first_name: string;
  last_name: string;
  code: string;
  case_result: CaseResult;
  case_duration: string;
  case_log: CaseLog[];
  extra_metadata: ExtraMetadata;
  recording: string;
  is_complete: boolean;
  status: string;
  last_updated: string;
  is_active: boolean;
}

export interface ClientInfo {
  count: number;
  next: string;
  previous: string;
  results: Results[];
}