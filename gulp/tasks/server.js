export const server = (done) => {
    app.plugins.browserSync.init (
        {
            server: {
                baseDir: `${app.path.build.html}`
            },
            notify: false,
            part: 3000,
        }
    )
}