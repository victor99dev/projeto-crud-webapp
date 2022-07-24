import {Task} from 'src/interfaces/Tasks';
import {Grid, Button} from 'semantic-ui-react';
import {useRouter} from 'next/router';
import TaskList from 'src/components/tasks/TaskList';
import Layout from 'src/components/layout'


interface Props {
  tasks: Task[]
}

export default function IndexPage({tasks} : Props) {

  const router = useRouter();

  
  return ( 
      <Layout>
      {tasks.length === 0 ? (
      <Grid 
        columns={2} 
        centered 
        verticalAlign='middle' 
        style={{height: '70%'}}
      >
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <h1>Nenhum(a) colaborador(a) cadastrado(a).</h1>
            <Button color='blue'onClick={() => router.push('/tasks/new')}>Cadastrar Colaborador(a)</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )  : (
      <TaskList tasks={tasks}/>
    )}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/tasks');
  const tasks = await res.json();

return {
  props: {tasks},
  };
};