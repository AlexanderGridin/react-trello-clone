interface Config {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  response: any;
}

export const logMockResponse = ({ method, url, response }: Config) => {
  console.group(`${method}: ${url}`);
  console.log(response);
  console.groupEnd();
};
