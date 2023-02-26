export const parseEnumForStory = <T extends object>(e: T) => {
  const keys: string[] = Object.keys(e);
  const values: any[] = Object.values(e);

  const labels: Record<string, string> = {};
  keys.forEach((key, index: number) => {
    labels[values[index]] = `${key}`;
  });

  return {
    options: values,
    labels,
  };
};
