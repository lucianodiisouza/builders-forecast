import * as Network from 'expo-network'
import { useEffect, useState } from 'react'

const useNetwork = () => {
  const [networkStatus, setNetworkStatus] = useState<Network.NetworkState>()

  const getNetworkStatus = () => {
    Network.getNetworkStateAsync()
      .then((res) => setNetworkStatus(res))
      .catch((e) => console.warn(e))
  }

  useEffect(() => {
    const interval = setInterval(getNetworkStatus, 15000)
    return () => clearInterval(interval)
  }, [])

  return { networkStatus, getNetworkStatus }
}

export default useNetwork
