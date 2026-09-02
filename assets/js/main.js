// Arquivo principal que carrega os módulos da aplicação

(function () {
    const modulos = [
        'assets/js/boasvindas.js',
        'assets/js/darkmode.js',
        'assets/js/menuburguer.js',
        'assets/js/busca.js'
    ];

    modulos.forEach(function (src) {
        if (!document.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement('script');
            script.src = src;
            script.async = false;
            document.head.appendChild(script);
        }
    });
})();
