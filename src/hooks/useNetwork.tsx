import * as Network from 'expo-network'
import { useEffect, useState } from 'react'
import Toast from 'react-native-root-toast'

const useNetwork = () => {
  const [networkStatus, setNetworkStatus] = useState<Network.NetworkState>()

  const getNetworkStatus = () => {
    Network.getNetworkStateAsync()
      .then((res) => setNetworkStatus(res))
      .catch(() => Toast.show('Erro ao obter o status da rede'))
  }

  useEffect(() => {
    const interval = setInterval(getNetworkStatus, 15000)
    return () => clearInterval(interval)
  }, [])

  return { networkStatus, getNetworkStatus }
}

export default useNetwork
