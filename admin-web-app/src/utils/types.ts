export interface AgentService {
  agent_service_url: string;
  agent_service_id: string;
  enabled: boolean;
}

export interface ProviderApp {
  name: string;
  url: string;
  agent_service_url: string;
  agent_service_id: string;
  enabled: boolean;
}
