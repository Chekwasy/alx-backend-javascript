export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`Error: ${error}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
