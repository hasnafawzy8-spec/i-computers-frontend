import { Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return(
        <div className="w-full h-full flex">
  <div className="w-[360px] h-full bg-blue-900 flex-col">

    <a href="/admin">Admin Dashboard  </a>
    <a href="/admin/products">Products  </a>
    <a href="/admin/users">Users  </a>
    </div>
    <div className="w-[calc(100%-360px)] h-full bg-blue-500">
        <Routes>
            <Route path="/" element={<h1>Admin Dashboard</h1>} />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/users" element={<h1>Users</h1>} />

        </Routes>
    </div>
        </div>
    )
}
