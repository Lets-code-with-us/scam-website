import React from 'react'
import Scam from "@/components/Scam"
function page() {
  return (
    <div className='flex gap-2 items-center justify-center'>
        {/* <Scam value={"fit"} url={"http://localhost:4000"}/>
        <Scam value={"fit1"} url={"http://localhost:4010"}/>
        <Scam value={"fit1"} url={"http://localhost:4010"}/> */}
        <Scam  imageUrl={"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title={"Phishing Scams"} content={"Fraudulent emails that imitate legitimate sources to trick recipients into revealing personal information, such as passwords or financial details. " } link={"/phishingscams"}/>
        <Scam imageUrl={"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title={"Phishing Scams"} content={"Fraudulent emails that imitate legitimate sources to trick recipients into revealing personal information, such as passwords or financial details. " } link={"/phishingscams"}/>
        <Scam imageUrl={"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title={"Phishing Scams"} content={"Fraudulent emails that imitate legitimate sources to trick recipients into revealing personal information, such as passwords or financial details. " } link={"/phishingscams"}/>
        <Scam imageUrl={"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title={"Phishing Scams"} content={"Fraudulent emails that imitate legitimate sources to trick recipients into revealing personal information, such as passwords or financial details. " } link={"/phishingscams"}/>

    </div>
  )
}

export default page