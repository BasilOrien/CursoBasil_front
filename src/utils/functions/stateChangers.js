export function changeState(setter, event) {
    setter(event.target.value)
}