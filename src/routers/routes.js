
import productsRouters from './productsRouters'

export default function(app){
    app.use("/products", productsRouters)

}