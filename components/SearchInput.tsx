'use client';

import useDebounce from "@/hooks/useDebounce";

import qs from 'query-string'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

const SearchInput = () => {

    const router = useRouter();
    const [value,setValue ] = useState<string>('');
    const debounceValue = useDebounce<string>(value,500)

    useEffect(() => {
        const query ={
            title:debounceValue,
        };

        const url = qs.stringifyUrl({
                url:'/search',
                query:query
        })
        router.push(url)
    }, [debounceValue,router]);


  return (
    <Input
    placeholder="دوست داری چی بشنوی؟"
    value={value}
    onChange={(e)=> setValue(e.target.value) }
    />
  )
}

export default SearchInput