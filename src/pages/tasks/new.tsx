import { Button, Card, Form, Grid, Icon, Confirm } from 'semantic-ui-react';
import { ChangeEvent, FormEvent, useState, useEffect} from 'react';
import { Task } from 'src/interfaces/Tasks';
import { useRouter} from 'next/router';
import Layout from 'src/components/layout';
import TaskList from 'src/components/tasks/TaskList';
import { Query } from 'pg';

export default function newPage() {

    const [task, setTask] = useState({
        NOME: "",
        IDADE: "",
        SEXO: "",
        CPF: "",
        CID: "",
        UF: "",
        TELE_COL: "",
        EMAIL: "",
        SENHA: "",
        DEPA: "",
        GRUPO: "",
        STATUS: "",
        R_SOCIAL: "",
        DESCR: "",
    });

    const [openConfirm, setOpenConfirm] = useState(false);

    const router = useRouter();

    const handleChange = ({
        target: { name, value }
    }: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => 
        setTask ({...task, [name]: value });

    const creatTask = async (task: Task) =>

        await fetch("http://localhost:3000/api/tasks", {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const updateTask = async (id:string, task: Task) => {
            await fetch("http://localhost:3000/api/tasks/" + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            })
        }

        const loadTask = async (id: string) => {
            const res = await fetch("http://localhost:3000/api/tasks/" + id);
            const task = await res.json();
            setTask({ 
                NOME: task.nome,
                IDADE: task.idade,
                SEXO: task.sexo,
                CPF: task.cpf,
                CID: task.cid,
                UF: task.uf,
                TELE_COL: task.tele_col,
                EMAIL: task.email,
                SENHA: task.senha,
                DEPA: task.depa,
                GRUPO: task.grupo,
                STATUS: task.status,
                R_SOCIAL: task.r_social,
                DESCR: task.descr, 
            });
          };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (typeof router.query.id === 'string') {
                updateTask(router.query.id, task)
            } else {
                await creatTask(task);
            }
                router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
          const res = await fetch("http://localhost:3000/api/tasks/" + id, {
            method: "DELETE",
          });
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      };


    useEffect(() => {
        if (typeof router.query.id === "string") loadTask(router.query.id);
      }, [router.query]); 

    return (
    <Layout>
        <Grid 
           centered
           columns={3}
           verticalAlign="middle"
           style={{ height: "70%" }}
        >
            <Grid.Column>
                <Card>
                    <Card.Content>
                        <Form onSubmit={handleSubmit}>
                            <Form.Field>
                                <label htmlFor="NOME">Nome:</label>
                                <input 
                                    type="text" 
                                    placeholder="Nome do colaborador(a)" 
                                    name='NOME' 
                                    onChange={handleChange}
                                    value={task.NOME}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="IDADE">Idade:</label>
                                <input 
                                    type="text" 
                                    placeholder="Idade do colaborador(a)" 
                                    name='IDADE'
                                    onChange={handleChange}
                                    value={task.IDADE}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="SEXO">Sexo:</label>
                                <input 
                                    type="text" 
                                    placeholder="Sexo do colaborador(a)" 
                                    name='SEXO'
                                    onChange={handleChange}
                                    value={task.SEXO}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="CPF">CPF:</label>
                                <input 
                                    type="text" 
                                    placeholder="CPF" 
                                    name='CPF'
                                    onChange={handleChange}
                                    value={task.CPF}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="CID">Cidade:</label>
                                <input 
                                    type="text" 
                                    placeholder="Cidade" 
                                    name='CID'
                                    onChange={handleChange}
                                    value={task.CID}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="UF">UF:</label>
                                <input 
                                    type="text"
                                    placeholder="UF" 
                                    name='UF'
                                    onChange={handleChange}
                                    value={task.UF}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="TELE_COL">Telefone:</label>
                                <input 
                                    type="text" 
                                    placeholder="Telefone" 
                                    name='TELE_COL'
                                    onChange={handleChange}
                                    value={task.TELE_COL}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="EMAIL">E-mail:</label>
                                <input 
                                    type="text" 
                                    placeholder="E-mail" 
                                    name='EMAIL'
                                    onChange={handleChange}
                                    value={task.EMAIL}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="SENHA">Senha:</label>
                                <input 
                                    type="text" 
                                    placeholder="Senha" 
                                    name='SENHA'
                                    onChange={handleChange}
                                    value={task.SENHA}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="DEPA">Departamento:</label>
                                <input 
                                    type="text" 
                                    placeholder="Departamento" 
                                    name='DEPA'
                                    onChange={handleChange}
                                    value={task.DEPA}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="GRUPO">Grupo:</label>
                                <input 
                                    type="text" 
                                    placeholder="Grupo" 
                                    name='GRUPO'
                                    onChange={handleChange}
                                    value={task.GRUPO}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="STATUS">Status:</label>
                                <input 
                                    type="text" 
                                    placeholder="Status" 
                                    name='STATUS'
                                    onChange={handleChange}
                                    value={task.STATUS}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="R_SOCIAL">Redes Sociais:</label>
                                <input 
                                    type="text" 
                                    placeholder="Redes Sociais" 
                                    name='R_SOCIAL'
                                    onChange={handleChange}
                                    value={task.R_SOCIAL}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="DESCR">Descrição:</label>
                                <textarea
                                    name="DESCR"
                                    rows={3}
                                    placeholder="Descrição"
                                    onChange={handleChange}
                                    value={task.DESCR}
                                ></textarea>
                            </Form.Field>
                            <div padding='30px'>
                            {
                                router.query.id ? (
                                <Button color='orange'>
                                    <Icon name='save'/>
                                    Atualizar
                                </Button>
                                    ) : (
                                <Button color='blue' primary>
                                    <Icon name='save'/>
                                    Salvar
                                </Button>       
                                )
                            } 
                            </div>                       
                        </Form>
                    </Card.Content>
                    {router.query.id && (
                        <Button color = 'red' onClick={() => setOpenConfirm(true)}>
                            Excluir
                        </Button>

                        )
                    }
                </Card>
            </Grid.Column>
        </Grid>
        <Confirm
            header = 'Excluir Registro'
            content = {`Você deixa  realmente excluir`}
            open={openConfirm}
            onCancel={() => setOpenConfirm(false)}
            onConfirm={() => typeof router.query.id === 'string' && handleDelete(router.query.id)}
        />      
    </Layout>    
    )
}