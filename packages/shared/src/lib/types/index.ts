export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}

export interface HealthCheckResponse {
  status: string;
  version: string;
  timestamp: number;
}

export interface GreetingResponse {
  message: string;
  from: string;
}
