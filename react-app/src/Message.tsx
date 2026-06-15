// PascalCasing is used for React component names; React components must start with a capital letter.
function Message() {
    // JSX: JavaScript XML
    const name = 'Iman';
    if (name) {
        return <h1>Hello, {name}!</h1>;
    }
    return <h1>Hello World!</h1>;
}

export default Message;