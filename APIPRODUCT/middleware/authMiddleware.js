// Simulated admin middleware
exports.isAdmin = (req, res, next) => {
    const isAdminUser = true; // Replace with actual check from auth system
    if (!isAdminUser) return res.status(403).json({ message: 'Admins only' });
    next();
};
  