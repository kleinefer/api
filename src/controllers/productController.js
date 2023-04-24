import product from "../database"

export const obtenerProductos = async (req, res) => {
    
    const productos = await product.findAll()
    res.json(productos)
}

export const obtenerProductoPorId =async(req , res) =>{
    
    const producto = await product.findByPk(req.params.id)
    res.json(producto)
};  
export const crearProducto =async(req , res) =>{

    const crearProducto = await product.create(req.body)
    res.json(crearProducto)
};  

export const actualizarProductoPorId = async (req, res) => {
    const producto = await product.findByPk(req.params.id);
    await producto.update(req.body);
    res.json({ message: "Producto actualizado" });
  };
  
  export const eliminarProductoPorId = async (req, res) => {
    const producto = await product.findByPk(req.params.id);
    await producto.destroy();
    res.json({ message: "Producto eliminado" });
  };


