export const helloRoutes = {
    method: 'get',
    path:'/hello',
    handler: (req,res) => {
        res.send("Hello Hello")
    }
}