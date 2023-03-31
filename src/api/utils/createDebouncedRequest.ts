import { debounce } from "throttle-debounce";

export interface DebouncedRequestConfig<Response> {
  beforeRequest?: () => void;
  afterRequest?: (response: Response) => void;
}

export const createDebouncedRequest = <Response>(timeInMs: number, makeRequest: () => Promise<Response>) => {
  return debounce(timeInMs, async ({ beforeRequest, afterRequest }: DebouncedRequestConfig<Response>) => {
    beforeRequest?.();
    const response = await makeRequest();
    afterRequest?.(response);
  });
};
