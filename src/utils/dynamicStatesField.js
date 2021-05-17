export function validateFields(event, state, setState) {
  setState({...state, [event.target.name]:event.target.value});
};