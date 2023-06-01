import { useEffect, useState } from "react";

const useDatas = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://todonotes-server.onrender.com/datas')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [datas])

    return [datas, setDatas];
}

export default useDatas;
