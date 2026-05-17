import { useQuery } from '@tanstack/react-query'
import { getConfig } from '@/lib/config'

const DEFAULT_MAX_BATCH_SIZE = 50

export function useMaxBatchSize(): number {
  const { data } = useQuery({
    queryKey: ['runtime-config'],
    queryFn: () => getConfig(),
    staleTime: Infinity,
    gcTime: Infinity,
  })
  return data?.maxBatchSize ?? DEFAULT_MAX_BATCH_SIZE
}
