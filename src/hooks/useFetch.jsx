/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react'

export default function useFetch({
  method = 'GET',
  url = '',
  headers = {},
  enable = true,
  isResetData = true,
  cancelPrevious = false, // Thêm tùy chọn để bật/tắt chức năng hủy bỏ
}) {
  const [data, setData] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const headerRef = useRef(headers)
  useEffect(() => {
    let controller
    if (cancelPrevious) {
      controller = new AbortController() // Tạo AbortController chỉ khi `cancelPrevious` là true
    }
    const signal = cancelPrevious ? controller.signal : null

    const fetchData = async () => {
      if (isResetData) setData(undefined)
      if (url && enable) {
        setLoading(true)
        setError(null)

        try {
          const response = await fetch(`${process.env.API_HOST}${url}`, {
            method,
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.API_TOKEN}`,
              ...headerRef.current,
            },
            signal, // Truyền signal vào fetch nếu `cancelPrevious` là true
          })

          if (!response.ok) {
            throw new Error('Network response was not ok')
          }

          const result = await response.json()
          setData(result?.results ?? result)
        } catch (err) {
          if (err.name !== 'AbortError') {
            setError(err.message)
          }
        } finally {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      // Hủy bỏ yêu cầu chỉ khi `cancelPrevious` là true
      if (cancelPrevious && controller) {
        controller.abort()
      }
    }
  }, [method, url, enable, isResetData, cancelPrevious])

  return { data, error, loading }
}
