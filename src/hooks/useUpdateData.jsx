import { useState } from "react";

const useUpdateData = () => {
    const [error, setError] = useState(false);
    const [pending, setIsPending] = useState(false);

    const updateData = async (url, body) => {
        setIsPending(true)
        try {
            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
            if(!response.ok) {
                throw new Error("Failed to update data")
            }
            
           
        } catch(error) {
            setError(error.message);
            throw error
        } finally {
            setIsPending(false);
        }
    }
    return {updateData, pending, error};
}

export default useUpdateData;