export const getProjectFeed = async ({
    cursor = null,
    limit = 5
} = {}) => {

    const params = new URLSearchParams();

    params.append("limit", limit);

    if (cursor) {
        params.append("cursor", cursor);
    }

    const response = await fetch(
        `http://localhost:0080/api/projects/feed?${params.toString()}`,
        {
            method: "GET",
            credentials: "include"
        }
    );

    const data = await response.json();

    if (!response.ok) {

        throw new Error(
            data.message || "Failed to fetch project feed"
        );

    }

    return data;
};