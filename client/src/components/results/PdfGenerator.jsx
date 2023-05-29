import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

export function PdfGenerator({ props }) {
  const data = props.data;

  const QuestionnairePDF = () => (
    <Document>
      <Page key='1' style={styles.page}>
      <Text style={styles.initialPrompt}>Questionnaire</Text>
      <Text style={styles.helpText}>NOTE: * = Right answer for multiple choice questions</Text>
      {data.map((question, index) => (
        <View style={styles.questionContainer}>
          <Text style={styles.title}>Question #{index}</Text>
          {

            question.question.map((text,index)=>{              
              return index === 0 ? <Text style={styles.question}>{text.split(':')[1]}</Text> : <Text style={styles.question}>{text}</Text>
            })
          }
          <Text style={styles.helpText}>Help text: {question.help_text}</Text>
          <Text style={styles.options}>{question.options.length > 1 ? `Options: ${question.options.join(', ')}` : `Right answer: ${question.options[0]}`}</Text>
        </View>
      ))}
      </Page>
      
    </Document>
  );

  return (
    <div>
      <h1>Here is your desired PDF!</h1>
      <PDFDownloadLink document={<QuestionnairePDF />} fileName="questionnaire.pdf">
        {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  initialPrompt: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Helvetica-Bold', // Establece una fuente en negrita
    color: '#333', // Establece el color del texto
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Helvetica-Bold', // Establece una fuente en negrita
    color: '#333', // Establece el color del texto
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Helvetica-Bold', // Establece una fuente en negrita
    color: '#333', // Establece el color del texto
  },
  helpText: {
    fontSize: 12,
    marginBottom: 5,
    color: 'gray',
    fontStyle: 'italic', // Establece el estilo del texto en cursiva
  },
  options: {
    fontSize: 14,
    color: '#555',
  },
});
