{
    "buildCommand":"npm run build",
    "outputDirectory":"dist/maquette2/browser",
    "rewrites":[
        {
            "source":"/(.*)",
            "destination":"/index.html"
        }
    ]
}