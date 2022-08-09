import Head from 'next/head'
import { useState } from 'react'

import { Calc } from 'calc-js'

export default function Index() {

  // Linha de teste

  const [ n1, setN1 ] = useState('')
  const [ n2, setN2 ] = useState('')
  const [ method, setMethod ] = useState('')

  const handleMethod = (e) => {

    setMethod(e)

  }

  const setNumbers = (e) => {

    if(method){

      setN2(n2 + e)

    }else{

      setN1(n1 + e)

    }

  }

  const finalValue = () => {

    switch(method){

      case 'division': 
        setN1(JSON.stringify(new Calc(JSON.parse(n1 ? n1.replace(/,/g, '.') : 0)).divide(JSON.parse(n2 ? n2.replace(/,/g, '.') : 0)).finish()))
          break

      case 'multiplication':
        setN1(JSON.stringify(new Calc(JSON.parse(n1 ? n1.replace(/,/g, '.') : 0)).multiply(JSON.parse(n2 ? n2.replace(/,/g, '.') : 0)).finish()))
          break

      case 'subtraction':
        setN1(JSON.stringify(new Calc(JSON.parse(n1 ? n1.replace(/,/g, '.') : 0)).minus(JSON.parse(n2 ? n2.replace(/,/g, '.') : 0)).finish()))
          break

      case 'addition':
        setN1(JSON.stringify(new Calc(JSON.parse(n1 ? n1.replace(/,/g, '.') : 0)).sum(JSON.parse(n2 ? n2.replace(/,/g, '.') : 0)).finish()))
          break

      default:
        alert('Houve algum problema, recarregue a página e tente novamente! Caso o erro persista entre em contato conosco...')

    }

    setN2('')
    setMethod('')

  }

  const cleanUp = () => {

    setMethod('')
    setN1('')
    setN2('')

  }

  return (

    <>

      <Head>

        <title>Calculadora</title>

      </Head>

      <div className='bg-calc d-flex align-items-center justify-content-center'>

        <div className='c-calc d-flex flex-column'>

          <div className='visors-calc d-flex align-items-center justify-content-end p-3'>

            <h3>

              {(

                () => {

                  if(method){

                    return n2 ? n2 : 0

                  }else{

                    return n1 ? n1 : 0

                  }

                }

              )()}

            </h3>

          </div>

          <div className='d-flex flex-column'>

            <div className='d-flex'>

              <div onClick={ () => handleMethod('division') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>/</div>
              <div onClick={ () => handleMethod('multiplication') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>x</div>
              <div onClick={ () => handleMethod('subtraction') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>-</div>
              <div onClick={ () => handleMethod('addition') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>+</div>

            </div>

            <div className='d-flex'>

              <div className='d-flex flex-column col-9'>

                <div className='d-flex'>

                  <div onClick={ () => setNumbers('7') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>7</div>
                  <div onClick={ () => setNumbers('8') }className='d-flex align-items-center justify-content-center col p-2 keys-calc'>8</div>
                  <div onClick={ () => setNumbers('9') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>9</div>

                </div>

                 <div className='d-flex'>

                  <div onClick={ () => setNumbers('4') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>4</div>
                  <div onClick={ () => setNumbers('5') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>5</div>
                  <div onClick={ () => setNumbers('6') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>6</div>

                </div>

                 <div className='d-flex'>

                  <div onClick={ () => setNumbers('1') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>1</div>
                  <div onClick={ () => setNumbers('2') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>2</div>
                  <div onClick={ () => setNumbers('3') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>3</div>

                </div>

                 <div className='d-flex'>

                  <div onClick={ () => setNumbers('0') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>0</div>
                  <div onClick={ () => setNumbers('.') } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>.</div>
                  <div onClick={ cleanUp } className='d-flex align-items-center justify-content-center col p-2 keys-calc'>C</div>

                </div>

              </div>

              <div onClick={ finalValue }  className='d-flex align-items-center justify-content-center keys-calc col-3'>=</div>

            </div>

          </div>

        </div>

      </div>
    
    </>
    
  )

}
