import { Card } from "semantic-ui-react";
import { Task } from "src/interfaces/Tasks";
import {useRouter} from "next/router";

interface Props {
  tasks: Task[];
}

function TaskList({tasks}: Props) {

  const router = useRouter()

   return (
    <Card.Group itemsPerRow={3}>
      {tasks.map(task => (
        <Card key={task.id_col} onClick={() => router.push(`/tasks/edit/${task.id_col}`)}>
          <Card.Content>
            <Card.Header textAlign="center">{task.nome}</Card.Header>
            <Card.Description textAlign="center">{task.status}</Card.Description>
            <br/>
            <Card.Description>Descrição: {task.descr}</Card.Description>
            <br/>
            <Card.Meta> Última Alteração: {new Date(task.create_on).toLocaleDateString()}</Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
   );
}

export default TaskList;