"use client"

import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CodeTheKeyLogo from '../../public/logo.svg'
import IconCourse from '../../public/vuejs.svg'
import { LucideSettings } from 'lucide-react';
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from 'react';

export default function Home() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-zinc-900 h-screen flex flex-col items-center">
      <header className="flex justify-between bg-zinc-950 py-11 px-40 w-full">
        <Image src={CodeTheKeyLogo} alt="logo do code the key" />

        <div className='flex items-center'>
          <Button className='mr-2' variant="outline">
            <LucideSettings />
          </Button>

          <Button variant="default">Entrar</Button>
        </div>
      </header>

      <div className=" px-40 w-full mt-12">
        <h1 className='font-bold text-3xl'>Cursos</h1>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center font-medium text-2xl'>
                <Image className='mr-3' src={IconCourse} alt="ícone do curso"/>
                Vue.js 3
              </CardTitle>
              <CardDescription className='text-base'>
                Treinamento completo e gratuito de Vue.js do iniciante ao avançado
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardFooter className='flex flex-col'>
              <div className='flex justify-between w-full items-center'>
                <div className='flex items-center my-5'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>                
                  
                  <p className='ml-2'>
                    Igor Halfeld
                  </p>
                </div>

                <p className='font-bold text-primary'>
                  {progress}%
                </p>
              </div>

              <Progress value={progress} />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center font-medium text-2xl'>
                <Image className='mr-3' src={IconCourse} alt="ícone do curso"/>
                Vue.js 3
              </CardTitle>
              <CardDescription className='text-base'>
                Treinamento completo e gratuito de Vue.js do iniciante ao avançado
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardFooter className='flex flex-col'>
              <div className='flex justify-between w-full items-center'>
                <div className='flex items-center my-5'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>                
                  
                  <p className='ml-2'>
                    Igor Halfeld
                  </p>
                </div>

                <p className='font-bold text-primary'>
                  {progress}%
                </p>
              </div>

              <Progress value={progress} />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center font-medium text-2xl'>
                <Image className='mr-3' src={IconCourse} alt="ícone do curso"/>
                Vue.js 3
              </CardTitle>
              <CardDescription className='text-base'>
                Treinamento completo e gratuito de Vue.js do iniciante ao avançado
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardFooter className='flex flex-col'>
              <div className='flex justify-between w-full items-center'>
                <div className='flex items-center my-5'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>                
                  
                  <p className='ml-2'>
                    Igor Halfeld
                  </p>
                </div>

                <p className='font-bold text-primary'>
                  {progress}%
                </p>
              </div>

              <Progress value={progress} />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center font-medium text-2xl'>
                <Image className='mr-3' src={IconCourse} alt="ícone do curso"/>
                Vue.js 3
              </CardTitle>
              <CardDescription className='text-base'>
                Treinamento completo e gratuito de Vue.js do iniciante ao avançado
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardFooter className='flex flex-col'>
              <div className='flex justify-between w-full items-center'>
                <div className='flex items-center my-5'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>                
                  
                  <p className='ml-2'>
                    Igor Halfeld
                  </p>
                </div>

                <p className='font-bold text-primary'>
                  {progress}%
                </p>
              </div>

              <Progress value={progress} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
