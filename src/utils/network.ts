export async function fetchJsonData<T>(url: string): Promise<T | boolean> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Could not fetch!", response.status);
      return false;
    }

    return await response.json();
  } catch (error) {
    console.error("Could not fetch!", error);
    return false;
  }
}

export async function postHTTP<T>(
  url: string,
  body: T
): Promise<Response | boolean> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "default",
    });

    if (!response.ok) {
      console.error("Could not fetch!", response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Could not fetch!", error);
    return false;
  }
}
