import s from '../styles/FeatureCenter.module.scss'

export default function FeatureCenter({featureCenterContent}) {
    const {title, lead, image} = featureCenterContent;
    return <div className={s.wrapper}>
        <div className={s.left}>
            <h3 className={s.title}>{title}</h3>
        </div>
        <div className={s.right}>
            <p className={s.lead}>{lead}</p>
        </div>
        <div className={s.image}>
            <img src={image} className={s.img} />
        </div>
    </div>
}