/* eslint-disable react/prop-types */
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';


function ResumePDF({ basicInfo }) {

    const styles = StyleSheet.create({
        page: { backgroundColor: 'tomato' },
        section: {textAlign: 'center', margin: 30 },
    });

    const ResumeDocument = () => (
        <Document>
            <Page size="A4">
                <section style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', margin: 30 }}>
                    <View>
                        <Text >{basicInfo.firstName} {basicInfo.lastName}</Text>
                    </View>
                    <View>
                    </View>
                </section>
            </Page>
        </Document>
    );

    return(
        <PDFViewer showToolbar={false} className='w-full p-1'>
            <ResumeDocument />
        </PDFViewer>
    )
}

export default ResumePDF;