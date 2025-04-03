import { InputMask } from "@react-input/mask";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { Aside, Balance, ChartAction, ChartContainer, ChartContent, Filters, Header, InputGroup, Main, SearchTransaction, Section, TransactionGroup } from "./styles";
import { ButtonIcon } from "../../components/button-icon";
import { Card } from "../../components/card";
import { Transaction } from "../../components/transaction";
import { CreateCategoryDialog } from "../../components/create-category-dialog";
import { CreateTransactionDialog } from "../../components/create-transaction-dialog";
import { CategoriesPieChart } from "../../components/categories-pie-chart";
import { FinancilaEvoluntionBarChart } from "../../components/financial-evoluntion-bar-chart";

export function Home() {
	return (
		<>
			<Header>
				<Logo />
				<div>
				  <CreateTransactionDialog />
				  <CreateCategoryDialog />
				</div>
			</Header>
			<Main>
				<Section>
					<Filters>
						<Title title="Saldo" subtitle="Receitas e Dispesas no periodo" />
						<InputGroup>
                          <InputMask 
                            component={Input}
                            mask="dd/mm/aaaa"
                            replacement={{d: /\d/, m: /\d/, a: /\d/}}
                            variant="dark" 
                            label="Início"
                            placeholder="dd/mm/aaaa"
                          />
                          <InputMask 
                            component={Input}
                            mask="dd/mm/aaaa"
                            replacement={{d: /\d/, m: /\d/, a: /\d/}}
                            variant="dark" 
                            label="Fim"
                            placeholder="dd/mm/aaaa"
                          />
			              <ButtonIcon />
						</InputGroup>
					</Filters>
					<Balance>
					  <Card title="Saldo" amount={1000000}/>
					  <Card title="Receitas" amount={1000000} variant="incomes"/>
					  <Card title="Gastos" amount={1000000} variant="expenses"/>
					</Balance>
					<ChartContainer>
						<header>
							<Title title="Gastos" 
							  subtitle="Despesas por categoria no período"
							/>
						</header>
						<ChartContent> 
							<CategoriesPieChart />
						</ChartContent>
					</ChartContainer>
					<ChartContainer>
						<header>
							<Title title="Evolução Financeira" 
							  subtitle="Saldo, Receitas e Gastos no ano"
							/>

                           <ChartAction>
							  <InputMask 
                                 component={Input}
                                 mask="aaaa"
                                 replacement={{d: /\d/, m: /\d/, a: /\d/}}
                                 variant="black" 
                                 label="Ano"
                                 placeholder="aaaa"
                                />
								<ButtonIcon />
							</ChartAction>
						</header>
						<ChartContent> 
							<FinancilaEvoluntionBarChart />
						</ChartContent>
					</ChartContainer>
				</Section>
				<Aside>
					<header>
						<Title title="Transações" subtitle="Receitas e Gastos no período"/>
						<SearchTransaction>
					      <Input variant="black" placeholder="Procurar transações"/>
					      <ButtonIcon />
						</SearchTransaction>
					</header>
					<TransactionGroup>
						<Transaction 
						   id={1} 
						   amount={50000} 
						   date="31/03/2025" 
						   category={{title: 'Alimentação', color: '#3352ff'}}
						   title="Mercado"
						/>
						<Transaction 
						   id={1} 
						   amount={20000} 
						   date="25/03/2025" 
						   category={{title: 'Alimentação', color: '#3352ff'}}
						   title="Mercado"
						/>
						<Transaction 
						   id={1} 
						   amount={100000} 
						   date="24/03/2025" 
						   category={{title: 'ESTUDO', color: '#ff4733'}}
						   title="Faculdade"
						/>
						<Transaction 
						   id={1} 
						   amount={180000} 
						   date="31/03/2025" 
						   category={{title: 'CONTRATO', color: '#ff33bb'}}
						   title="Emprego"
						/>
					</TransactionGroup>
				</Aside>
			</Main>
		</>
	);
}
