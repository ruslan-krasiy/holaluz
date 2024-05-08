import type { Client, FullClientInfo } from "@/interfaces/client.interface"
import type { SupplyPoint } from "@/interfaces/supply-point.interface"

export async function getClientByCup(cups: string): Promise<FullClientInfo | null> {
  try{
    const responseAllClients = await fetch("/store/clients.json")
    const allClients: Client[] = await responseAllClients.json()
    const user = allClients.find((client) => client.cups === cups)

    if(!user){
      return null
    }

    const responseAllSupplyPoints = await fetch("/store/supply-points.json")
    const allSupplyPoints:SupplyPoint[] = await responseAllSupplyPoints.json()

    const moreInfo = allSupplyPoints.find((info) => info.cups === cups)
    if(!moreInfo){
      return user as FullClientInfo
    }

    return {
      ...user,
      ...moreInfo
    }

  }catch(e){
    throw new Error("Can't fetch clients data")
  }
}

export async function searchClientsByCup(cups: string): Promise<FullClientInfo[]> {
  try{
    const responseAllClients = await fetch("/store/clients.json")
    const allClients: Client[] = await responseAllClients.json()
    const clients = allClients.filter(client => client.cups.indexOf(cups) > -1)

    if(clients.length === 0){
      return []
    }

    const responseAllSupplyPoints = await fetch("/store/supply-points.json")
    const allSupplyPoints:SupplyPoint[] = await responseAllSupplyPoints.json()

    const results:FullClientInfo[] = []

    clients.map((client) => {
      const moreInfo = allSupplyPoints.find(({cups}) => cups === client.cups)
      if(moreInfo){
        results.push({
          ...client,
          ...moreInfo!
        })
      }
    })

    return results

  }catch(e){
    throw new Error("Can't fetch clients data")
  }
}