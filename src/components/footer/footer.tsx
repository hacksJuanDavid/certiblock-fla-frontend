import FacebookIcon from '@components/icons/facebook-icon'
import InstagramIcon from '@components/icons/instagram-icon'
import TiktokIcon from '@components/icons/tiktok-icon'

export default function Footer() {
  return (
    <>
      {/* //footer component */}
      <div className="flex justify-center w-[100%] h-max">
        <footer className="footer p-5 bg-base-200 rounded-t-[3.4rem] grid-flow-col font-black text-lg">
          {/* //footer container company*/}
          <div className="">
            <span className="footer-title">Compañia</span>
            <a className="link link-hover">Acerca de nosotros</a>
            <a className="link link-hover">Comunidad</a>
            <a className="link link-hover">Partners</a>
          </div>
          {/* //footer container content*/}
          <div className="">
            <span className="footer-title">Content</span>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Podcast</a>
            <a className="link link-hover">Newsletter</a>
          </div>
          <div>
            {/* //footer container social*/}
            <div className="grid grid-flow-row gap-4 mt-2">
              {/* //a social facebook*/}
              <a>
                <FacebookIcon />
              </a>
              {/* //a social instagram*/}
              <a>
                <InstagramIcon />
              </a>
              {/* //a social tiktok*/}
              <a>
                <TiktokIcon />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
