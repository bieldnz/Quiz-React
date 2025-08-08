import React, { useState } from 'react';
import Styles from "./Quiz.module.css";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showPrize, setShowPrize] = useState(false);

    const questions = [
        {
            text: "Qual é a capital do Brasil?",
            options: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
            correctAnswer: "Brasília"
        },
        {
            text: "Quanto é 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4"
        },
        {
            text: "Qual é o maior planeta do sistema solar?",
            options: ["Marte", "Saturno", "Júpiter", "Netuno"],
            correctAnswer: "Júpiter"
        },
        {
            text: "Quem pintou a Mona Lisa?",
            options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Monet"],
            correctAnswer: "Leonardo da Vinci"
        },
        {
            text: "Qual é o elemento químico mais abundante no universo?",
            options: ["Oxigênio", "Carbono", "Hélio", "Hidrogênio"],
            correctAnswer: "Hidrogênio"
        }
    ];


    const handleAnswer = (selectedOption: string) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const claimPrize = () => {
        setShowPrize(true);
        setShowResult(false);
    };

    // Adicione estados para formulário
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: ''
    });

    // Função para atualizar dados do formulário
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para processar envio do formulário
    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validações básicas
        if (!formData.nome || !formData.cpf || !formData.email) {
            alert('Por favor, preencha todos os campos obrigatórios');
            return;
        }

        // Lógica de envio
        console.log('Dados enviados:', formData);
        alert('Formulário enviado com sucesso!');
    };

    // Resto do seu código anterior permanece igual

    if (showResult) {
        return (
            <div className={Styles.containerAll}>
                <div className={Styles.quizContainer}>
                    <h1>🎉 Parabéns! Você ganhou um Prêmio! 🎁</h1>
                    <div className={Styles.prizeDetails}>
                        <p>Prêmio: Kit Tecnologia Completo</p>
                        <p>Valor do Prêmio: R$ 499,90</p>
                        
                        {score >= 0 ? (
                            <button 
                                className={Styles.buttonClass}
                                onClick={claimPrize}
                            >
                                Resgatar Prêmio
                            </button>
                        ) : (
                            <p>Você precisa acertar pelo menos 4 questões para ganhar o prêmio.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    if (showPrize) {
        return (
            <div className={Styles.containerAll}>
                <div className={Styles.quizContainer}>
                    <h1>🎉 Parabéns! Você ganhou um Prêmio! 🎁</h1>
                    <form onSubmit={handleSubmitForm} className={Styles.formContainer}>
                        {/* Seus campos de formulário existentes, adicione name e onChange */}
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            placeholder="Nome Completo"
                            className={Styles.inputField}
                            required
                        />
                        <input
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleInputChange}
                            placeholder="CPF"
                            className={Styles.inputField}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="E-mail"
                            className={Styles.inputField}
                            required
                        />
                        <input
                            type="text"
                            name="cep"
                            value={formData.cep}
                            onChange={handleInputChange}
                            placeholder="CEP"
                            className={Styles.inputField}
                            required
                        />
                        <input
                            type="text"
                            name="endereco"
                            value={formData.endereco}
                            onChange={handleInputChange}
                            placeholder="Endereço"
                            className={Styles.inputField}
                            required
                        />
                        <div className={Styles.formRow}>
                            <input
                                type="text"
                                name="numero"
                                value={formData.numero}
                                onChange={handleInputChange}
                                placeholder="Número"
                                className={Styles.inputField}
                                required
                            />
                            <input
                                type="text"
                                name="complemento"
                                value={formData.complemento}
                                onChange={handleInputChange}
                                placeholder="Complemento"
                                className={Styles.inputField}
                            />
                        </div>
                        <div className={Styles.formRow}>
                            <input
                                type="text"
                                name="cidade"
                                value={formData.cidade}
                                onChange={handleInputChange}
                                placeholder="Cidade"
                                className={Styles.inputField}
                                required
                            />
                            <select
                                name="estado"
                                value={formData.estado}
                                onChange={handleInputChange}
                                className={Styles.inputField}
                                required
                            >
                                <option value="">Selecione o Estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>

                        <div className={Styles.paymentSummary}>
                            <p>Valor do Prêmio: R$ 499,90</p>
                            <p>Valor do Frete: R$ 29,90</p>
                        </div>

                        <button
                            type="submit"
                            className={Styles.buttonClass}
                        >
                            Confirmar Envio
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className={Styles.containerAll}>
            <div className={Styles.quizContainer}>
                <h1>Quiz</h1>
                <div className={Styles.questionSection}>
                    <h2>Pergunta {currentQuestion + 1}</h2>
                    <p>{questions[currentQuestion].text}</p>
                </div>
                <div className={Styles.answerSection}>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;