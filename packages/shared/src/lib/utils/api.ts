import type { ApiResponse, GreetingResponse, HealthCheckResponse } from '../types';

const API_BASE_URL = '/api';

/**
 * Fetch wrapper for API calls
 */
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Unknown error',
        timestamp: Date.now(),
      };
    }

    return {
      success: true,
      data,
      timestamp: Date.now(),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
      timestamp: Date.now(),
    };
  }
}

/**
 * Check backend health
 */
export async function checkHealth(): Promise<ApiResponse<HealthCheckResponse>> {
  return apiFetch<HealthCheckResponse>('/health');
}

/**
 * Get a greeting message from the backend
 */
export async function getGreeting(name?: string): Promise<ApiResponse<GreetingResponse>> {
  const query = name ? `?name=${encodeURIComponent(name)}` : '';
  return apiFetch<GreetingResponse>(`/greet${query}`);
}
