import Dashboard from './Dashboard'

function Home(props) {
    const { showAlert } = props
    return (
        <>
            <Dashboard showAlert={showAlert} />
        </>
    )
}

export default Home