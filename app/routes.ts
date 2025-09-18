import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/auth", 'routes/auth.tsx'),
    route('/upload', 'routes/Upload.tsx'),
    route('/resume-details/:id', 'routes/Resume.tsx'),
    route('/wipe', 'routes/Wipe.tsx'),
] satisfies RouteConfig;
