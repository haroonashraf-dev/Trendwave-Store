import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { Plus, Edit2, Trash2, Package, DollarSign, Tag } from "lucide-react";
export function AdminDashboard() {
  const { products, loading, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (currentProduct.id) {
        await updateProduct(currentProduct.id, currentProduct);
      } else {
        await addProduct(currentProduct);
      }
      setIsEditing(false);
      setCurrentProduct({});
    } catch (error) {
      console.error("Failed to save product", error);
      alert("Failed to save product. See console for details.");
    }
  };
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
      } catch (error) {
        console.error("Failed to delete product", error);
        alert("Failed to delete product.");
      }
    }
  };
  const totalInventory = products.reduce((sum, p) => sum + p.stock, 0);
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  return <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Admin Dashboard</h1>
          <button
    onClick={() => {
      setCurrentProduct({
        name: "",
        price: 0,
        category: "",
        image: "",
        images: [],
        sizes: ["S", "M", "L"],
        stock: 0,
        description: ""
      });
      setIsEditing(true);
    }}
    className="bg-black text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
  >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>

        {
    /* Stats */
  }
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">{products.length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Inventory</p>
              <p className="text-2xl font-bold text-gray-900">{totalInventory} items</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Inventory Value</p>
              <p className="text-2xl font-bold text-gray-900">${totalValue.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {
    /* Product List */
  }
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Product</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Stock</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading ? <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">Loading products...</td>
                  </tr> : products.length === 0 ? <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No products found.</td>
                  </tr> : products.map((product) => <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover border" />
                          <span className="font-medium text-gray-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{product.category}</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.stock > 10 ? "bg-green-100 text-green-800" : product.stock > 0 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
                          {product.stock} in stock
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
    onClick={() => handleEdit(product)}
    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
  >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
    onClick={() => handleDelete(product.id)}
    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
  >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {
    /* Edit Modal */
  }
        {isEditing && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">{currentProduct.id ? "Edit Product" : "Add New Product"}</h2>
              </div>
              <form onSubmit={handleSave} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
    type="text"
    required
    value={currentProduct.name || ""}
    onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
    className="w-full px-3 py-2 border rounded-md focus:ring-black focus:border-black"
  />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
    type="text"
    required
    value={currentProduct.category || ""}
    onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
    className="w-full px-3 py-2 border rounded-md focus:ring-black focus:border-black"
  />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                    <input
    type="number"
    step="0.01"
    required
    value={currentProduct.price || ""}
    onChange={(e) => setCurrentProduct({ ...currentProduct, price: parseFloat(e.target.value) })}
    className="w-full px-3 py-2 border rounded-md focus:ring-black focus:border-black"
  />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                    <input
    type="number"
    required
    value={currentProduct.stock || ""}
    onChange={(e) => setCurrentProduct({ ...currentProduct, stock: parseInt(e.target.value) })}
    className="w-full px-3 py-2 border rounded-md focus:ring-black focus:border-black"
  />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Main Image URL</label>
                  <input
    type="url"
    required
    value={currentProduct.image || ""}
    onChange={(e) => {
      const url = e.target.value;
      setCurrentProduct({
        ...currentProduct,
        image: url,
        images: currentProduct.images?.length ? [url, ...currentProduct.images.slice(1)] : [url]
      });
    }}
    className="w-full px-3 py-2 border rounded-md focus:ring-black focus:border-black"
  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
    required
    rows={4}
    value={currentProduct.description || ""}
    onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
    className="w-full px-3 py-2 border rounded-md focus:ring-black focus:border-black"
  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t mt-6">
                  <button
    type="button"
    onClick={() => setIsEditing(false)}
    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors"
  >
                    Cancel
                  </button>
                  <button
    type="submit"
    className="px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
  >
                    Save Product
                  </button>
                </div>
              </form>
            </div>
          </div>}

      </div>
    </div>;
}
