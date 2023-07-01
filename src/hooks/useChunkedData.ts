import { Movie } from "../types";
import { useEffect, useState, useRef } from "react";

const useChunkedData = (data: Movie[], chunkSize: number): Movie[][] => {
  const [chunkedData, setChunkedData] = useState<Movie[][]>([]);
  const prevData = useRef<Movie[]>([]);
  const prevChunkSize = useRef<number>(0);

  useEffect(() => {
    if (prevData.current !== data || prevChunkSize.current !== chunkSize) {
      const chunkData: Movie[][] = [];
      for (let i = 0; i < data.length; i += chunkSize) {
        chunkData.push(data.slice(i, i + chunkSize));
      }
      setChunkedData(chunkData);
      prevData.current = data;
      prevChunkSize.current = chunkSize;
    }
  }, [data, chunkSize]);

  return chunkedData;
};

export default useChunkedData;
