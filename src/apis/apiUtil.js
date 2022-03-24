export async function handleResponse(response) {
    if (response.status === 200) return response.data;
    if (
        response.status === 409 ||
        response.status === 401 ||
        response.status === 404 ||
        response.status === 403
    )
        return response.data;
    if (response.status === 400) {
        const error = await response.json();
        return error;
        //throw new Error(error);
    }
    throw new Error("Network response was not ok");
}

export function handleError(error) {
    if (error.status === 409) return error.json();
    console.error("API Call Failed. " + error);
    throw error;
}
