


function FooterText({ todos }) {
    const progressCount = todos.filter(todo => todo.completed === false).length;
    return (
        <footer className="text-xl font-semibold">You Have a {progressCount} Pending Tasks</footer>
    )
}

export default FooterText