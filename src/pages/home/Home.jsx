const Home = () => {
    return (
        <div>
            <section id='Home'>
                <h1>Home</h1>
                <p>Bem vindo ao gerenciador de gado</p>
                <a href="/recarregapagina">Recarregando pagina Home</a>
            </section>

            <section id='Cadastro'>
                <h2>cadastre-se</h2>
                <div>
                    <button>Usuario</button>
                    <button>Animal</button>
                </div>
            </section>

            <section id='Orçamento'>
                <h2>Faça seu Orçamento</h2>
                <a href="carregue para proxima pagina"> Indo para Orçamento</a>
            </section>

            <section id='Login'>
                <h2>Faça seu login</h2>
                <a href="carregue para a proxima pagina"> Indo para Login</a>
            </section>
        </div>
    );
};

export default Home;
