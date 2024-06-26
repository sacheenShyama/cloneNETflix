import { async } from '@firebase/util'
import { signInWithPopup, signInWithRedirect } from 'firebase/auth'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix clone</title>
        <link rel="icon" href="/favicon.icon" />
        <meta name="google-site-verification" content="QhGjgk-QxxCuvSs23DpWU3b7tzzjzIHAGrkKw-SGMOk" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <span className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6">
        {/* <img
          src="https://rb.gy/ulxxee"
          alt=""
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
        /> */}
        <span className="text-5xl text-[#e50914]">Netflix clone</span>
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">Netflix clone</h1>
          <label htmlFor="" className="inline-block w-full">
            <input
              type="email"
              placeholder="email"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label htmlFor="" className="inline-block w-full">
            <input
              type="password"
              placeholder="password"
              className="input"
              {...register('password', { required: true })}
            />

            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
        >
          Sign IN
        </button>

        <div className="text-[gray]">
          New to Netflix? fill-up details and click on --
          <button
            type="submit"
            className="font-bold text-[#e50914] hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default login
