export default interface ICatalog {
    id: number,
    size: string,
    name: string,
    price: number,
    salePrice?: number,
    description: string,
    url: string
}