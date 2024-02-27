export function TodoCounter(props) {
    const { total = 0, totalCompleted = 0 } = props
    return(
        <h1>
            { `You have completed ${ totalCompleted } of ${ total } TODOs` }
        </h1>
    )
}