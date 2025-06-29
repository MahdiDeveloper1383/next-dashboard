import { useEffect, useState } from "react";
import { IRandomUser } from "../type/interfaces/Randomuser";
import axios from "axios";

export default function Getuser() {
    const [user, setuser] = useState<IRandomUser | null>(null);
    const [loading, setloading] = useState<boolean>(false);
    const [error, seterror] = useState<string>("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setloading(true);
                const response = await axios.get("https://randomuser.me/api/?results=1&nat=us");
                setuser(response.data.results[0]);
            } catch (err) {
                console.error(err);
                seterror("Error fetching user data");
            } finally {
                setloading(false);
            }
        };

        fetchUser(); 
    }, []);

    return { user, loading, error }; 
}